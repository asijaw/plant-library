class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :benefit
      t.string :care
      t.string :difficulty
      t.string :image

      t.timestamps
    end
  end
end
