json.array!(@songs) do |song|
  json.extract! song, :id, :title, :movie, :composer, :singer, :lyricist, :year, :language, :raaga
  json.url song_url(song, format: :json)
end
