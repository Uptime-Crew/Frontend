function Status(props) {

    function testingProps() {
        console.log(props);
    }
    testingProps()

    function backgroundColor(status) {
        if (status === 'OK') {
            return 'bg-lime-500';
        } else if (status === 'KO') {
            return 'bg-rose-500';
        } else return 'bg-yellow-400';
        
    }

    return (
        <div>
            <h1>{props.monitor.name}</h1>
            {props.monitor.lastStatus.map((status) => (
                <div className={ backgroundColor(status) + ' h-6 w-2 rounded' }>
                    {status}
                </div>
            ))}
        </div>
    );
}

export default Status;

// "h-6 w-2 rounded"