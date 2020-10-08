class CreateProgressNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :progress_notes do |t|
      t.string :text
      t.belongs_to :plant

      t.timestamps
    end
  end
end
