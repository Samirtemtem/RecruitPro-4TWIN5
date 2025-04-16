import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Interface for contact message data
interface ContactMessage {
  _id: string;
  username: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
}

const ContactManagementPage: React.FC = () => {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const itemsPerPage = 10;

  // Fetch contact messages from the backend
  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/contact/contacts');
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
      await axios.delete(`http://localhost:5000/api/contact/contact/${id}`);
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

  // Function to format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Gestion des Messages de Contact</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/adminDashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Messages de Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search & Filter Row */}
        <div className="row filter-row mb-4">
          <div className="col-sm-6 col-md-4">
            <div className="form-group mb-0">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Rechercher par nom, email ou sujet..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Contact Messages List */}
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                {loading ? (
                  <div className="text-center p-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Chargement des messages de contact...</p>
                  </div>
                ) : error ? (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                ) : filteredContacts.length === 0 ? (
                  <div className="text-center p-5">
                    <i className="far fa-envelope-open" style={{ fontSize: '48px', color: '#ccc' }}></i>
                    <p className="mt-2">Aucun message de contact trouvé</p>
                  </div>
                ) : (
                  <>
                    <div className="table-responsive">
                      <table className="table table-striped custom-table">
                        <thead>
                          <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Sujet</th>
                            <th>Date</th>
                            <th className="text-end">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentContacts.map((contact) => (
                            <tr key={contact._id}>
                              <td>{contact.username}</td>
                              <td>
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                              </td>
                              <td>
                                <span title={contact.subject}>
                                  {contact.subject.length > 30 
                                    ? `${contact.subject.substring(0, 30)}...` 
                                    : contact.subject}
                                </span>
                              </td>
                              <td>{formatDate(contact.createdAt)}</td>
                              <td className="text-end">
                                <div className="dropdown dropdown-action">
                                  <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v"></i>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a 
                                      className="dropdown-item" 
                                      href="#" 
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleViewContact(contact);
                                      }}
                                    >
                                      <i className="far fa-eye me-2"></i> Voir le message
                                    </a>
                                    <a 
                                      className="dropdown-item text-danger" 
                                      href="#" 
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleDeleteContact(contact._id);
                                      }}
                                    >
                                      <i className="far fa-trash-alt me-2"></i> Supprimer
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="row mt-4">
                        <div className="col-sm-12 col-md-5">
                          <div className="dataTables_info">
                            Affichage {indexOfFirstItem + 1} à {Math.min(indexOfLastItem, filteredContacts.length)} sur {filteredContacts.length} messages
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <div className="dataTables_paginate">
                            <ul className="pagination justify-content-end">
                              <li className={`paginate_button page-item previous ${currentPage === 1 ? 'disabled' : ''}`}>
                                <a 
                                  href="#" 
                                  className="page-link"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                                  }}
                                >
                                  Précédent
                                </a>
                              </li>
                              
                              {[...Array(totalPages)].map((_, i) => (
                                <li key={i} className={`paginate_button page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                  <a 
                                    href="#" 
                                    className="page-link"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setCurrentPage(i + 1);
                                    }}
                                  >
                                    {i + 1}
                                  </a>
                                </li>
                              ))}
                              
                              <li className={`paginate_button page-item next ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <a 
                                  href="#" 
                                  className="page-link"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                                  }}
                                >
                                  Suivant
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Detail Modal */}
      {showDetailModal && selectedContact && (
        <div className="modal d-block modal-open" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Détails du Message</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowDetailModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="fw-bold">Nom:</label>
                      <p>{selectedContact.username}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="fw-bold">Email:</label>
                      <p><a href={`mailto:${selectedContact.email}`}>{selectedContact.email}</a></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="fw-bold">Sujet:</label>
                  <p>{selectedContact.subject}</p>
                </div>
                <div className="form-group">
                  <label className="fw-bold">Message:</label>
                  <div className="border rounded p-3 bg-light" style={{ minHeight: '150px' }}>
                    {selectedContact.message.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                {selectedContact.createdAt && (
                  <div className="form-group">
                    <label className="fw-bold">Date d'envoi:</label>
                    <p>{formatDate(selectedContact.createdAt)}</p>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-danger" 
                  onClick={() => handleDeleteContact(selectedContact._id)}
                >
                  <i className="far fa-trash-alt me-2"></i> Supprimer
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={() => setShowDetailModal(false)}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactManagementPage; 