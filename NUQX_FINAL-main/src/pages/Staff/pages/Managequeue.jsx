import React from 'react';

function Managequeue({ windowNumber }) {
  // Add useEffect to prevent body scrolling
  React.useEffect(() => {
    // Disable scrolling on body
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      height: '100vh', 
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }}>
      {/* Window # */}
      <div style={{ 
        position: 'fixed',
        top: '140px',
        right: '50px',
        backgroundColor: '#35408E',
        padding: '8px 15px',
        color: 'white',
        fontSize: '24px',
        fontFamily: 'Clan OT, sans-serif',
        borderRadius: '4px',
        zIndex: '999',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
      }}>
        Window {windowNumber}
      </div>
      
      {/* Empty spacer */}
      <div style={{ height: '100px' }}></div>
      
      {/* Main content */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-start',
        marginTop: '100px',
        marginLeft: '450px',
        marginRight: '20px'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center'
        }}>
          <div style={{
            border: '1px solid black',
            boxShadow: '2px 2px 5px black',
            padding: '20px',
            textAlign: 'center',
            backgroundColor: 'white',
            width: '400px',
            fontFamily: 'Clan OT, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', fontFamily: 'Clan OT, sans-serif', width: '100%' }}>Now Serving</div>
            <div style={{ fontSize: '70px', color: '#35408E', fontFamily: 'Clan OT, sans-serif', marginBottom: '15px', width: '100%' }}>ENR002</div>
            <button 
              style={{
                backgroundColor: '#35408E',
                color: 'white',
                fontSize: '20px',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 20px',
                cursor: 'pointer',
                marginTop: '10px',
                width: '120px'
              }}
            >
              NEXT
            </button>
          </div>
          
          {/* Now Serving Table */}
          <div style={{ 
            height: '341px', 
            overflowY: 'auto',
            border: '1px solid #B9B9B9',
            marginTop: '40px'
          }}>
            <table style={{ 
              width: '597px', 
              borderCollapse: 'collapse', 
              textAlign: 'center',
              fontFamily: 'Clan OT, sans-serif'
            }}>
              <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <tr>
                  <th style={{ 
                    backgroundColor: '#35408E', 
                    color: 'white', 
                    fontSize: '20px', 
                    fontFamily: 'Clan OT, sans-serif',
                    textAlign: 'center',
                    border: '1px solid #B9B9B9',
                    width: '50%'
                  }}>Ticket Number</th>
                  <th style={{ 
                    backgroundColor: '#35408E', 
                    color: 'white', 
                    fontSize: '20px', 
                    fontFamily: 'Clan OT, sans-serif',
                    textAlign: 'center',
                    border: '1px solid #B9B9B9'
                  }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample data rows */}
                {Array.from({ length: 50 }, (_, index) => (
                  <tr key={index}>
                    <td style={{ 
                      backgroundColor: 'white', 
                      color: 'black', 
                      fontSize: '20px', 
                      fontFamily: 'Clan OT, sans-serif', 
                      textAlign: 'center',
                      border: '1px solid #B9B9B9',
                      width: '50%'
                    }}>ENR{(index + 1).toString().padStart(3, '0')}</td>
                    <td style={{ 
                      backgroundColor: 'white', 
                      color: 'black', 
                      fontSize: '20px', 
                      fontFamily: 'Clan OT, sans-serif', 
                      textAlign: 'center',
                      border: '1px solid #B9B9B9'
                    }}>{index < 10 ? 'Processing' : 'Waiting'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Priority List Table */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          marginTop: '-47px',
          marginLeft: '40px'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', fontFamily: 'Clan OT, sans-serif' }}>Priority List</div>
          <div style={{ 
            height: '653px', 
            overflowY: 'auto',
            border: '1px solid #B9B9B9'
          }}>
            <table style={{ 
              width: '597px', 
              borderCollapse: 'collapse', 
              textAlign: 'center',
              fontFamily: 'Clan OT, sans-serif'
            }}>
              <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <tr>
                  <th style={{ 
                    backgroundColor: '#35408E', 
                    color: 'white', 
                    fontSize: '20px', 
                    fontFamily: 'Clan OT, sans-serif',
                    textAlign: 'center',
                    border: '1px solid #B9B9B9',
                    width: '50%'
                  }}>Ticket Number</th>
                  <th style={{ 
                    backgroundColor: '#35408E', 
                    color: 'white', 
                    fontSize: '20px', 
                    fontFamily: 'Clan OT, sans-serif',
                    textAlign: 'center',
                    border: '1px solid #B9B9B9'
                  }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample data rows */}
                {Array.from({ length: 50 }, (_, index) => (
                  <tr key={index + 50}>
                    <td style={{ 
                      backgroundColor: 'white', 
                      color: 'black', 
                      fontSize: '20px', 
                      fontFamily: 'Clan OT, sans-serif', 
                      textAlign: 'center',
                      border: '1px solid #B9B9B9',
                      width: '50%'
                    }}>ENR{(index + 51).toString().padStart(3, '0')}</td>
                    <td style={{ 
                      backgroundColor: 'white', 
                      color: 'black', 
                      fontSize: '20px', 
                      fontFamily: 'Clan OT, sans-serif', 
                      textAlign: 'center',
                      border: '1px solid #B9B9B9'
                    }}>Waiting</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Managequeue;
