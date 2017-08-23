import { getAuthors, getComments, normalizeArticles } from './articlesHelper';

describe('Helpers::Article', () => {
  const articles = [{
    'id': '1',
    'author': {
      'id': '1',
      'name': 'Polly Jane'
    },
    'title': 'How I spent my summer',
    'text': 'Few words about my summer story...',
    'comments': [{
      'id': '1',
      'text': 'Paris is so cool!',
      'commenter': {
        'id': '2',
        'name': 'John Galt'
      }
    }]
  }];

  it('should return normalized articles', () => {
    const expected = [{
      'id': '1',
      'author':'1',
      'title': 'How I spent my summer',
      'text': 'Few words about my summer story...',
      'comments': [{
        'id': '1',
        'text': 'Paris is so cool!',
        'commenter': '2'
      }
      ]
    }];

    expect(normalizeArticles(articles)).toEqual(expected);
  });

  it('should return all authors of article', () => {
    const expected = {
      '1': {
        'id': '1',
        'name': 'Polly Jane'
      },
      '2': {
        'id': '2',
        'name': 'John Galt'
      }
    };

    expect(getAuthors(articles)).toEqual(expected);
  });

  it('should return comments of article', () => {
    const expected = [{
      'id': '1',
      'text': 'Paris is so cool!',
      'commenter': '2'
    }];

    expect(getComments(articles)).toEqual(expected);
  });

});
