import * as React from 'react';
import { Radio, Select } from 'semantic-ui-react';
import {IAuthor} from "../../../interfaces/article";

class Sidebar extends React.PureComponent<ISidebarProps> {
  render() {
    const { authors } = this.props;
    const options = authors.map(author => {return {value: author.id, text: author.name}});

    return (
      <div>
        <Radio
          toggle
          label="Articles"
          value="articles"
        />
        <Radio
          toggle
          className="mt-xs mb-xs"
          label="Comments"
          value="comments"
        />
        <Select placeholder='Select author' options={options} />
      </div>
    );
  }
}

interface ISidebarProps {
  authors: Array<IAuthor>;
}

export default Sidebar;
