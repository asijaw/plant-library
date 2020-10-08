class ProgressNotesController < ApplicationController
  before_action :set_progress_note, only: [:show, :update, :destroy]

  # GET /progress_notes
  def index
    @progress_notes = ProgressNote.all

    render json: @progress_notes
  end

  # GET /progress_notes/1
  def show
    render json: @progress_note
  end

  # POST /progress_notes
  def create
    
    @progress_note = ProgressNote.new(progress_note_params)

    if @progress_note.save
      render json: @progress_note, status: :created, location: @progress_note
    else
      render json: @progress_note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /progress_notes/1
  def update
    if @progress_note.update(progress_note_params)
      render json: @progress_note
    else
      render json: @progress_note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /progress_notes/1
  def destroy
    @progress_note.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_progress_note
      @progress_note = ProgressNote.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def progress_note_params
      params.permit(:text, :plant_id)
    end
end
