import { PharmacyButton } from "./PharmacyButton";

export function ChooseVoyageForm({
  pharmacies,
  setPharmacyRoute,
  pharmacyRoute,
  voyage,
  setVoyage,
}) {
  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="flex">
        {pharmacies.map((pharmacy) => (
          <PharmacyButton
            key={pharmacy.id}
            name={pharmacy.nom}
            lat={pharmacy.latitude}
            lng={pharmacy.longitude}
            setPharmacyRoute={setPharmacyRoute}
            disabled={voyage}
          />
        ))}
      </div>
      <button
        className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
        onClick={() => pharmacyRoute !== null && setVoyage(true)}
        disabled={voyage}
      >
        Create a Voyage
      </button>
    </form>
  );
}
