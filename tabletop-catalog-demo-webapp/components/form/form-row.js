export default function FormRow({ label, value }) {
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">
                { label }
            </label>
            <div className="col-sm-10">
                <input className="form-control" value={ value } readOnly />
            </div>
        </div>
    );
}