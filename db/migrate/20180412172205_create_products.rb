class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :title
      t.text :desciption
      t.string :video
      t.string :video_url

      t.timestamps
    end
  end
end
