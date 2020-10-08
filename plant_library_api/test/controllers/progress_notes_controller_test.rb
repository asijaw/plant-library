require 'test_helper'

class ProgressNotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @progress_note = progress_notes(:one)
  end

  test "should get index" do
    get progress_notes_url, as: :json
    assert_response :success
  end

  test "should create progress_note" do
    assert_difference('ProgressNote.count') do
      post progress_notes_url, params: { progress_note: { text: @progress_note.text } }, as: :json
    end

    assert_response 201
  end

  test "should show progress_note" do
    get progress_note_url(@progress_note), as: :json
    assert_response :success
  end

  test "should update progress_note" do
    patch progress_note_url(@progress_note), params: { progress_note: { text: @progress_note.text } }, as: :json
    assert_response 200
  end

  test "should destroy progress_note" do
    assert_difference('ProgressNote.count', -1) do
      delete progress_note_url(@progress_note), as: :json
    end

    assert_response 204
  end
end
