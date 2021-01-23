class ConvertUserTableColumnUidTypeFromBigIntToString2 < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :uid, :bigInt
    add_column :users, :uid, :string
  end
end
