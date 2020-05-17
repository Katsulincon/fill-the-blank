class AddIndexToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :first_index, :integer
    add_column :cards, :second_index, :integer
  end
end
