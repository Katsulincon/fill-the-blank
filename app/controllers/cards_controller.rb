class CardsController < ApplicationController
  def index
    @cards = Card.all
    @deck = Deck.find(params[:deck_id])
  end

  def new
    @deck = Deck.find(params[:deck_id])
    @card = Card.new(original: params[:original])
    @letter_array = @card.original.split("")
    @num_array = (0..@card.original.length - 1).to_a

  end

  def create
    @card = Card.new(original: params[:original])
    @deck = Deck.find(params[:deck_id])
    #assign sentence to the card model
    #1.
    first_index = params[:first_index].to_i
    second_index = params[:second_index].to_i
    index_to_blank_array = (first_index..second_index).to_a

    letter_array = @card.original.split("")

    index_to_blank_array.each do  |index|
      letter_array[index] = "⬛"
    end

    @card.sentence = letter_array.join

    #assign answer to the card model
    @card.answer = @card.original.slice(first_index..second_index)
    @card.deck = @deck

    if @card.save
      redirect_to deck_cards_path(@deck)
    else
      render :new
    end
  end

  private


end






#1. create action(new/create)  DONE!
#Styling card of cards index
#Implement flip function to answer card

#. update action for card
#. delete action for card
