FILENAME = ARGV[0]

def read_lines(filename)
  file = File.open(filename)
  lines = file.readlines.map(&:chomp)
  file.close
  lines
end

if /award/.match(FILENAME)
  awards = read_lines(FILENAME)
  awards = awards.map { |award|
    award.split(",")
  }
  awards.each { |content, price|
    puts "%Award{content: \"#{content}\", price: #{price}},"
  }
elsif /candidate/.match(FILENAME)
  candidates = read_lines(FILENAME)
  candidates.each { |name| 
    puts "%Candidate{name: \"#{name}\"},"
  }
else
  puts "name your file begin with 'award' or 'candidate'"
end
