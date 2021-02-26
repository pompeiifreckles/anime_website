import { Input, InputGroup } from 'rsuite';
import { Icon } from 'rsuite';

function SearchBar() {
return (
        <div>
        <InputGroup style={styles}>
            <Input />
            <InputGroup.Button>
            <Icon icon="search" />
            </InputGroup.Button>
        </InputGroup>
    
        </div>
    )
}

const styles = {
    width: "100%",
    // paddingLeft: 20,
    // paddingRight: 20,
    // marginBottom: 10
};

export default SearchBar