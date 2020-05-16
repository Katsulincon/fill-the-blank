class CardsController < ApplicationController
  def index
    @cards = Card.all
    @deck = Deck.find(params[:deck_id])
  end

  def new
    @deck = Deck.find(params[:deck_id])
    @card = Card.new
  end

  def create
    @card = Card.new(card[:original])
    render :new

  end

  private


end






#1. create action(new/create)

#途中、originalをinputするところまでやっている
#createが難しいのであれば、originalだかでmodelを作り、edit/updateにpassしちゃう??

# - new / userからblankを作りたいoriginal textをgetする. プラス、blankにしたい箇所のindex num
# - create /blankにするlogicを完成させる。


#2. update action
