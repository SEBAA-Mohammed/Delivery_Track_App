import React, { useEffect } from "react";
import { Head } from "@inertiajs/react";
import { CourierMap } from "@/Components/CourierMap";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { echo } from "../echo"; // Adjust the path as necessary

export default function Courier({ auth, pharmacies }) {
  useEffect(() => {
    const channel = `App.Models.User.${auth.user.id}`;
    echo.private(channel).notification((notification) => {
      console.log(notification);
      alert(`New order assigned: ${notification.message}`);
    });
    return () => {
      echo.leave(channel);
    };
  }, [auth.user.id]);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Courier
        </h2>
      }
    >
      <Head title="Courier" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <CourierMap pharmacies={pharmacies} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
