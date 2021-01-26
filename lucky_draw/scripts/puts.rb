FILENAME = ARGV[0]

def line_to_array(filename)
  file = File.open(filename)
  file.readlines.map(&:chomp)
end

if /award/.match(FILENAME)
  awards = line_to_array(FILENAME)
  awards = awards.map { |award|
    award.split(",")
  }
  awards.each { |content, price|
    puts "%Award{content: \"#{content}\", price: #{price}},"
  }
elsif /candidate/.match(FILENAME)
  candidates = line_to_array(FILENAME)
  candidates.each { |name| 
    puts "%Candidate{name: \"#{name}\"},"
  }
else
  puts "name your file begin with 'award' or 'candidate'"
end
