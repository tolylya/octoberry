import * as React from 'react';
import { Radio, Dropdown } from 'semantic-ui-react';
import { IAuthor } from '../../../interfaces/article';

class Sidebar extends React.PureComponent<ISidebarProps> {

  changeMode = (e: any, { value }: any) => {
    this.props.changeMode(value);
  };

  selectAuthor = (e: any, { value }: any) => {
    this.props.selectAuthor(value);
  };

  render() {
    const { authors } = this.props;
    const options = authors.map((author) => {return { value: author.id, text: author.name }});
    options.unshift({ value: null, text: 'Select author' });

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
          value={this.props.selectedAuthorId}
          onChange={this.selectAuthor}
        />
      </div>
    );
  }
}

interface ISidebarProps {
  authors: Array<IAuthor>;
  mode: string;
  changeMode: Function;
  selectAuthor: Function;
  selectedAuthorId: string;
}

export default Sidebar;
