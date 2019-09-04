# Skeju

Scheduler calendar timeline component for ReactJS apps

## Getting Started
1. ```npm install skeju```
2. In your ReactJS component or application:
``` javascript
import {Scheduler} from 'skeju';

const App = () => {
    const items = [
        {
            id: '15d737b8-99dd-4295-8402-32b161a24531',
            row: 'row-1',
            startTime: moment().add(12, 'hours'),
            endTime: moment().add(2, 'seconds').add(2, 'days').add(24, 'hours'),
            allowSelect: true
        },
        {
            id: 'e1c1bc3f-0575-4871-aecf-474b66222e73',
            row: 'row-1',
            startTime: moment().add(10, 'hours'),
            endTime: moment().add(20, 'seconds').add(2, 'days').add(24, 'hours')
        },
        {
            id: '475fb589-d0ef-46d4-98be-fcbb18f9583c',
            row: 'row-2',
            startTime: moment().add(-100, 'days').startOf('day').add(12, 'hours'),
            endTime: moment().add(1, 'days').startOf('day').add(3, 'hours')
        }
    ];

    const rows = [
        { id: 'row-1' },
        { id: 'row-2' }
    ];

    return (
        <div style={{'width': '1000px'}}>
            <Scheduler
                visibleStartDate={moment()}
                visibleEndDate={moment().add(7, 'days')}
                items={items}
                rows={rows}
                renderItem={(props) => <Item {...props} />}
            />
        </div>
    );
};

render(<App />, document.getElementById("root"));
```
### Examples

[Live demo](https://dimagimburg.github.io/skeju/index.html)

### Documentation
Yet to be implemented

### Dependencies
Skeju depends only on `ReactJS` and `MomentJS`, in future we will support native javascript Date object as well. 

## Development
#### Running development environment
1. `npm install`
2. `npm run`
3. Open browser at `http://localhost:3001`

#### Tests

Yet to be implemented

#### Coding style

Please use `.eslint` file in development (already part of the webpack development server)

## Contributing

We appreciate any contribution to Skeju. For now just send a PR and the code review will be done by Dima Gimburg. Please be descriptive in your commit messages and keep code cleaner as possible and conform to eslint. Later there will be a `CONTRIBUTING.md` file with details on our code of conduct.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Dima Gimburg** - *Initial work* - [dimagimburg](https://github.com/dimagimburg)

See also the list of [contributors](https://github.com/dimagimburg/skeju/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
