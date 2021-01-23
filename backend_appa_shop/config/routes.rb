Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      get '/googleAuth', to: 'omni_auth#login'
    end
  end

  get '/auth/google_oauth2/callback' => 'api/v1/auth#create'
  get 'auth/failure' => 'api/v1/omni_auth#failure'
end