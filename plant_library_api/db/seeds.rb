# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Plant.create(
    name: "Aloe Vera", 
    benefit: "Heals wounds", 
    care: "Aloe vera plants need to be deeply watered and their soil left to dry just slightly (about 1 to 2 inches deep) between watering. They do very well with lots of sun but can turn brown if they get too much of it, so keeping your aloe vera plant under indirect sunlight is best.", 
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
)
Plant.create(
    name: "Lavender", 
    benefit: "Best known for its stress-relieving mental benefits, the scent of lavender is often used in spa products like bath salts, skincare creams, soaps and candles.", 
    care: "Lavender plants prefer well-drained soil and lots of sunlight. They also need deep watering, but be careful not to water them very often.", 
    image: "https://images.unsplash.com/photo-1565011523534-747a8601f10a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
)
Plant.create(
    name: "English Ivy", 
    benefit: "English ivy is another great plant to put in your bedroom. If you have asthma or difficulty breathing at night, it can help you breathe easier and get a restful night’s sleep.", 
    care: "The plant thrives under fluorescent light but not direct sun, so it’s the perfect houseplant for darker than normal bedrooms with artificial light. Soil should be kept most at all times, but not soggy.", 
    image: "https://images.unsplash.com/photo-1521386384476-5972c381a100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
)
Plant.create(
    name: "Snake Plant", 
    benefit: "Among one of the most popular choices for improving indoor air quality. It actually gets most of its job done at night, converting carbon dioxide into oxygen as you sleep.", 
    care: "Considered to be one of the easiest plants to care for, snake plants do great when placed under indirect sunlight. You really don’t have to water them much at all, and they’ll actually grow better if you let them dry out quite a bit between watering.", 
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
)
Plant.create(
    name: "Rosemary", 
    benefit: "Rosemary is an herb that’s been used in folk medicine for centuries to help improve concentration and memory.", 
    care: "Rosemary can be planted in a pot and put in any spot where it has access to bright sunlight. It should be watered evenly throughout the growing season, but will need less water in the winter.", 
    image: "https://images.unsplash.com/photo-1588353965219-062cb44e0ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
)



ProgressNote.create(
    plant_id: 1, text: "Grew 2 inches in the past week"
)
ProgressNote.create(
    plant_id: 1, text: "Watered every 2 weeks"
)
ProgressNote.create(
    plant_id: 2, text: "Looks to be over watered"
)
ProgressNote.create(
    plant_id: 2, text: "Picked some buds today"
)
ProgressNote.create(
    plant_id: 3, text: "Showing signs of overwatering"
)
ProgressNote.create(
    plant_id: 3, text: "Growing consistently"
)
ProgressNote.create(
    plant_id: 4, text: "Showing signs of overwatering"
)
ProgressNote.create(
    plant_id: 4, text: "Air seems to be more pure"
)
ProgressNote.create(
    plant_id: 5, text: "Lots of greenage forming"
)
ProgressNote.create(
    plant_id: 5, text: "Picked some leaves for cooking"
)