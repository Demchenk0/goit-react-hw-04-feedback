export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log (options)
    return (
        <div>
            {options.map((element) => {
                return (<button onClick={() => {
                    onLeaveFeedback(element)
                }} key={element} type="button">{element}</button>)
            })}
        </div>
    )
}