class CreateStickies < ActiveRecord::Migration[6.0]
  def change
    create_table :stickies do |t|
      t.string :title
      t.text :text

      t.timestamps
    end
  end
end
