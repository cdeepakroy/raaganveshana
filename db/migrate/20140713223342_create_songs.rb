class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :movie
      t.string :composer
      t.string :singer
      t.string :lyricist
      t.integer :year
      t.string :language
      t.string :raaga

      t.timestamps
    end
  end
end
