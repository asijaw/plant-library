# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Plant.create(
    name: "Aloe Vera", 
    species: "Aloe barbadensis miller", 
    benefit: "Heals wounds", 
    care: "Aloe vera plants need to be deeply watered and their soil left to dry just slightly (about 1 to 2 inches deep) between watering. They do very well with lots of sun but can turn brown if they get too much of it, so keeping your aloe vera plant under indirect sunlight is best.", 
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
)
ProgressNote.create(
    plant_id: 1, text: "grew 2 inches"
)