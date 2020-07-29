import React from 'react';

import { Input, Button } from 'reactstrap';

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = React.useState('');

    const onSubmitTerm = (event) => {
        event.preventDefault();
        props.onInput(searchTerm);
        setSearchTerm('');
    }

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-2"></div>
                        <div className="ml-4 col-6 col-md-4">
                            <Input type="text" value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)} />
                        </div>
                        <div className="col-1 pl-0">
                            <Button color="primary" onClick={(event) => onSubmitTerm(event)} 
                                className="fa fa-search ml-1 font-weight-bold">   </Button>
                        </div>
                </div>  
            </div>
        </React.Fragment>
    )
}

export default SearchBar;
