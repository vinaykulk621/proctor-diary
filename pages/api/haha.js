"use client";
// imports

export function StudentDetails({ }) {
    // useState() hook used to initialise the card as empty
    // and after fetching data from database update the card field using this hook
    // ex:
    // const [number,setNumber] = useState("")

    // api call
    async function handleStudent() {
        try {
            const res = await fetch("/api/getStudent");
            const ans = await res.json();
            // changing the content of the card on the page
            // setNumber(ans["contact"]);
            // ...
        } catch (e) {
            console.log(e);
        }
    }

    // calling the fetch api as soon as the page renders
    // so the cards on the page is filled with appropriate data
    handleStudent();

    return (
        <div className="flex flex-col space-y-10 text-center">
            <div className="flex flex-row space-x-10">

                {/* card where the data is updated after api fetch call */}
                {/* <Tablets content={number} label="Phone-Number" /> */}
                {/* ...many more cards */}

            </div>
        </div>
    );
}
