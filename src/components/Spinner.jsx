export default function Spinner({ loading, label }) {
     return (
          <div className={`spinner-wrap ${loading ? 'loading' : ''}`}>
               <span className="label">{label}</span>
               {loading && <div className="spinner" />}
          </div>
     )
}