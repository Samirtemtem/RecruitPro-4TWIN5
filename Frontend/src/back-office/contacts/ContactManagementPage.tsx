import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Define ContactMessage type
interface ContactMessage {
  _id: string;
  username: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

const ContactMessagesGrid: React.FC = () => {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch contact messages from the backend
  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/contact/contacts`);
        console.log('API Response:', response.data); // Log the full API response
        setContacts(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch contact messages');
        console.error('Error fetching contacts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(contact => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      contact.username.toLowerCase().includes(searchTermLower) ||
      contact.email.toLowerCase().includes(searchTermLower) ||
      contact.subject.toLowerCase().includes(searchTermLower)
    );
  });

  // Paginate contacts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  // Function to handle contact deletion
  const handleDeleteContact = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;

    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/contact/contact/${id}`);
      setContacts(prevContacts => prevContacts.filter(contact => contact._id !== id));

      if (selectedContact && selectedContact._id === id) {
        setSelectedContact(null);
        setShowDetailModal(false);
      }
    } catch (err: any) {
      console.error('Error deleting contact:', err);
      alert('Failed to delete contact message. Please try again.');
    }
  };

  // Function to view contact details
  const handleViewContact = (contact: ContactMessage) => {
    setSelectedContact(contact);
    setShowDetailModal(true);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Inline date formatting with error handling
  const formatDate = (dateString: string): string => {
    console.log('Parsing date:', dateString); // Log the date string
    if (!dateString) {
      console.warn('Empty date string received');
      return 'Invalid Date';
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date format: ${dateString}`);
      return 'Invalid Date';
    }
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="page-wrapper">
      <style>{`
        .card {
          min-height: 250px; /* Smaller minimum height for cards */
          display: flex;
          flex-direction: column;
        }
        .card-body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }
        .bg-light .text-dark {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 150px; /* Adjusted for smaller card size */
        }
        .card-body h6, .card-body p, .card-body span {
          margin-bottom: 0.5rem; /* Consistent spacing */
        }
        .modal {
          display: none; /* Hidden by default */
        }
        .modal.show {
          display: flex !important; /* Use flex to center */
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1050;
          background-color: rgba(0, 0, 0, 0.5); /* Backdrop */
        }
        .modal-dialog {
          margin: auto; /* Center the modal */
        }
      `}</style>
      <div className="content">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Contact Messages</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">
                    <i className="ti ti-smart-home" />
                  </Link>
                </li>
                <li className="breadcrumb-item">Administration</li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact Messages Grid
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* /Breadcrumb */}

        {/* Search Bar */}
        <div className="row mb-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Contact Messages Grid */}
        <div className="row">
          {loading ? (
            <div className="col-md-12 text-center">
              <p>Loading contact messages...</p>
            </div>
          ) : error ? (
            <div className="col-md-12 text-center">
              <p className="text-danger">{error}</p>
            </div>
          ) : currentContacts.length === 0 ? (
            <div className="col-md-12 text-center">
              <p>No contact messages found.</p>
            </div>
          ) : (
            currentContacts.map((contact) => (
              <div key={contact._id} className="col-xxl-3 col-xl-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="d-flex flex-column">
                        <div className="d-flex flex-wrap mb-1">
                          <h6 className="fs-16 fw-semibold me-1">{contact.username}</h6>
                        </div>
                        <p className="text-gray fs-13 fw-normal">{contact.email}</p>
                      </div>
                    </div>
                    <div className="bg-light rounded p-2">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="text-gray fs-14 fw-normal">Subject</h6>
                        <span className="text-dark fs-14 fw-medium">{contact.subject}</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="text-gray fs-14 fw-normal">Received</h6>
                        <span className="text-dark fs-14 fw-medium">
                          {formatDate(contact.createdAt)}
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="text-gray fs-14 fw-normal">Message Preview</h6>
                        <span className="text-dark fs-14 fw-medium">
                          {contact.message.slice(0, 30)}...
                        </span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleViewContact(contact)}
                      >
                        View Details
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteContact(contact._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* /Contact Messages Grid */}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="col-md-12">
            <div className="text-center mb-4">
              <nav>
                <ul className="pagination justify-content-center">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index + 1}
                      className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}

        {/* Load More (Optional) */}
        {filteredContacts.length > currentContacts.length && (
          <div className="col-md-12">
            <div className="text-center mb-4">
              <button
                className="btn btn-primary"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <i className="ti ti-loader-3 me-1" />
                Load More
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p className="mb-0">2025 © RECRUITPRO.</p>
        <p>
          Designed & Developed By{' '}
          <Link to="#" className="text-primary">
            InfiniteLoopers
          </Link>
        </p>
      </div>

      {/* Details Modal */}
      {showDetailModal && selectedContact && (
        <div className={`modal fade ${showDetailModal ? 'show' : ''}`}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Message Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDetailModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p><strong>Name:</strong> {selectedContact.username}</p>
                <p><strong>Email:</strong> {selectedContact.email}</p>
                <p><strong>Subject:</strong> {selectedContact.subject}</p>
                <p><strong>Message:</strong> {selectedContact.message}</p>
                <p><strong>Received:</strong> {formatDate(selectedContact.createdAt)}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary me-1"
                  onClick={() => setShowDetailModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDeleteContact(selectedContact._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactMessagesGrid;