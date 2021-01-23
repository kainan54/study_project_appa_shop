class ConvertUserTableColumnUidTypeFromIntToBigInt < ActiveRecord::Migration[6.1]
  def change

    remove_column :users, :uid, :int
    add_column :users, :uid, :bigInt
  end
end
