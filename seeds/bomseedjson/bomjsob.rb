require 'nokogiri'
require 'open-uri'
require 'json'

books =[
  # {:key=>"1-ne",   :book_id => 1,  :chapters => 22},
  # {:key=>"2-ne",   :book_id => 2,  :chapters => 33},
  # {:key=>"jacob",  :book_id => 3,  :chapters => 7},
  # {:key=>"enos",   :book_id => 4,  :chapters => 1},
  # {:key=>"jarom",  :book_id => 5,  :chapters => 1},
  # {:key=>"omni",   :book_id => 6,  :chapters => 1},
  # {:key=>"w-of-m", :book_id => 7,  :chapters => 1},
  # {:key=>"mosiah", :book_id => 8,  :chapters => 29},
  # {:key=>"alma",   :book_id => 9,  :chapters => 63},
  # {:key=>"hel",    :book_id => 10, :chapters => 16},
  # {:key=>"3-ne",   :book_id => 11, :chapters => 30},
  # {:key=>"4-ne",   :book_id => 12, :chapters => 1},
  # {:key=>"morm",   :book_id => 13, :chapters => 9},
  # {:key=>"ether",  :book_id => 14, :chapters => 15},
  {:key=>"moro",   :book_id => 15, :chapters => 10},
]



books.each do |book|
  seed = []
  current_chapter = 1
  while current_chapter <= book[:chapters] do
    uri = "https://www.lds.org/scriptures/bofm/#{book[:key]}/#{current_chapter}"
    html = open(uri)
    verses = Nokogiri::HTML(html).css('p.verse')
    puts
    puts "===================="
    verses.each do |verse|
      verse.css('a').each{|reference|
        reference.css('sup').remove
      }
      words = verse.text.split
      number = words.shift
      seed << {
        :verse   => number.to_i,
        :text    => words.join(' '),
        :book_id => book[:book_id],
        :chapter => current_chapter
      }
      puts
      puts verse.text
    end
    puts "===================="
    puts uri
    current_chapter += 1
    sleep 25
  end
  File.open("#{book[:key]}.js", 'w'){|f| f.write("module.exports = " + seed.to_json)}
end




# puts seed.to_json#.inspect
