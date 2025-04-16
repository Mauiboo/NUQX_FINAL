import React from "react";

const ServicesList = () => {
  const services = [
    { id: "0001", name: "Enrollment" },
    { id: "0002", name: "Graduation" },
  ];

  return (
    <div className="services-list">
      <h4>Services</h4>
      <table>
          <tr>
            <th>Process ID</th>
            <th>Process Name</th>
          </tr> 
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.id}</td>
              <td>{service.name}</td>
            </tr>
          ))}
        </tbody>
      </table> 

      <table>
          <tr>
            <th>Department Name</th>
            <th>Process Request</th>
          </tr>
        <tbody>
          <tr>
            <td>Registrar</td>
            <td>Transcript Request</td>
          </tr>
          <tr>
            <td>Library</td>
            <td>Book Borrowing</td>
          </tr>
        </tbody>
      </table>
      </div>
  );
};

export default ServicesList;
