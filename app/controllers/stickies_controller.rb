class StickiesController < ApplicationController
    def board
        @stickies = Sticky.all
    end

    def new
        @sticky = Sticky.new
    end

    def show
        @sticky = Sticky.find(params[:id])
    end

    def create
        @sticky = Sticky.new(sticky_params)
 
        if @sticky.save
            redirect_to @sticky
        else
            render 'new'
        end
    end
    private
    def sticky_params
        params.require(:sticky).permit(:title, :text)
    end


end
