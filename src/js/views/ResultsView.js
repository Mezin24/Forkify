import View from './View.js';
import previewView from './previewView.js';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parenElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = ' No bookmarks yet. Find a nice recipe and bookmark it :)';

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new ResultsView();
