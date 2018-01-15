class CreatePizzas < ActiveRecord::Migration[5.1]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.string :topping1
      t.string :topping2

      t.timestamps
    end
  end
end
