class Api::V1::AuthController < ApplicationController
    include ActionController::Cookies
    skip_before_action :authorized, only: [:authorize]

    # either matches username and password or has data from googleOath2 callback
    def authorize
        #coming from omniauth flow
      if request.env['omniauth.auth']
        @googleUser = request.env['omniauth.auth'] 

        @user = User.find_by(uid: @googleUser.uid)

        if @user
          token = encode_token({ user_id: @user.id })
          
          cookies[:appaShop] = token;
          redirect_to 'http://localhost:3001/'


        else
          @user = User.create(email: @googleUser.info.email, password: BCrypt::Password.create(('a'..'z').to_a.shuffle[0,8].join), uid: @googleUser.uid)
          token = encode_token({ user_id: @user.id })

          cookies[:appaShop] = token;
          redirect_to 'http://localhost:3001/'
        end

      else

        @user = User.find_by(email: user_login_params[:email])
        #User#authenticate comes from BCrypt
        if @user && @user.authenticate(user_login_params[:password])
          # encode token comes from ApplicationController
          token = encode_token({ user_id: @user.id })
          render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
        else
          render json: { message: 'Invalid email or password' }, status: :unauthorized
        end

      end

    end
  
    private
  
    def user_login_params
      # params { user: {email: 'Chandler Bing', password: 'hi' } }
      params.require(:user).permit(:email, :password)
    end
  end