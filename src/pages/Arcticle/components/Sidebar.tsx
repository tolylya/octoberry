import * as React from 'react';
import { Radio, Dropdown } from 'semantic-ui-react';
import { IAuthorsObj } from '../../../interfaces/article';

class Sidebar extends React.PureComponent<ISidebarProps> {

  changeMode = (e: any, { value }: any) => {
    this.props.changeMode(value);
  };

  selectAuthor = (e: any, { value }: any) => {
    this.props.selectAuthor(value);
  };

  getOptions = (authors: IAuthorsObj) => {
    const options: any = [{ value: null, text: 'Select author' }];

    for (const key in authors) {
      if (authors.hasOwnProperty(key)) {
        options.push({
          text: authors[key].name,
          value: authors[key].id
        });
      }
    }

    return options;
  };

  render() {
    const { authors, selectedAuthorId } = this.props;
    const options: any = this.getOptions(authors);

    return (
      <div>
        <div>
          <Radio
            toggle
            label="Articles"
            value="articles"
            checked={this.props.mode === 'articles'}
            onChange={this.changeMode}
          />
        </div>
        <div>
          <Radio
            toggle
            className="mt-xs mb-xs"
            label="Comments"
            value="comments"
            checked={this.props.mode === 'comments'}
            onChange={this.changeMode}
          />
        </div>
        <Dropdown
          selection
          placeholder="Select author"
          options={options}
          value={selectedAuthorId}
          onChange={this.selectAuthor}
        />
      </div>
    );
  }
}

interface ISidebarProps {
  authors: IAuthorsObj;
  mode: string;
  changeMode: Function;
  selectAuthor: Function;
  selectedAuthorId: string;
}

export default Sidebar;
