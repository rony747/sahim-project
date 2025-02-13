export default function FormErrors({errors} :{errors?: null | string} ) {

    return (
        <>
            {errors && <div className="text-red-500 text-sm">{errors}</div>}
        </>
    )
}

