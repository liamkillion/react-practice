class Api::V1::PizzasController < ApplicationController

  def index
    @pizzas = Pizza.all
    render json: @pizzas
  end

  def create 
		@pizza = Pizza.new(name: params[:pizza][:name],
      topping1: params[:pizza][:topping1],
			topping2: params[:pizza][:topping2]
    )
		if @pizza.save
			render json: @pizza
		else
			render json: {failure: "That's not a pizza!"}
		end
	end

end
