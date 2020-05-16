class Card < ApplicationRecord
  belongs_to :deck
  validates :original, presence: true
end
