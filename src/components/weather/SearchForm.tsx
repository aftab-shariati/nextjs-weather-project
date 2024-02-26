import {ChangeEvent, FormEvent, useState} from "react";

interface Props{
    city: string,
    getWeatherData: Function
}

function SearchForm({city , getWeatherData} :Props) {

    const [namestate, setNamestate] = useState<string>(city);
   const cityNameChangeHandler = (e :ChangeEvent<HTMLInputElement>) => {
       setNamestate(e.target.value)

   }

   const submitHandler = (e :FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       getWeatherData(namestate);
   }
    return (
        <div>
            <form className={"m-auto flex justify-center border-b-2 pb-6 mb-6"} onSubmit={submitHandler}>
                <input type={"text"} name={"cityName"} className={"border rounded p-3"} onChange={cityNameChangeHandler} value={namestate} />
                <input type={"submit"} className={"bg-primary px-6 py-3 ml-3 text-white rounded"} value={"search"}/>
            </form>
        </div>
    );
}

export default SearchForm;