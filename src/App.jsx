import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { SiteContentProvider } from './context/SiteContentContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WinWin } from './components/WinWin'
import { ComparisonTable } from './components/ComparisonTable'
import { Partners } from './components/Partners'
import { AboutUs } from './components/AboutUs'
import { References } from './components/References'
import { LeadMagnetForm } from './components/LeadMagnetForm'
import { Footer } from './components/Footer'
import { Login } from './components/Login'
import { AdminLayout } from './components/admin/AdminLayout'
import { AdminDashboard } from './components/admin/AdminDashboard'
import { ReferenceForm } from './components/admin/ReferenceForm'
import { ReferencesPage } from './components/ReferencesPage'
import { ReferenceDetail } from './components/ReferenceDetail'

const LandingPage = () => {
    return (
        <div className="min-h-screen font-sans selection:bg-brand-turquoise selection:text-brand-navy">
            <Navbar />
            <main>
                <div id="hero">
                    <Hero />
                </div>
                <div id="model-win-win">
                    <WinWin />
                </div>
                <div id="porównanie">
                    <ComparisonTable />
                </div>
                <Partners />
                <div id="o-nas">
                    <AboutUs />
                </div>
                <References />
                <div id="analiza">
                    <LeadMagnetForm />
                </div>
            </main>
            <Footer />
        </div>
    )
}

function App() {
    return (
        <SiteContentProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/referencje" element={<ReferencesPage />} />
                        <Route path="/referencje/:id" element={<ReferenceDetail />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
                        <Route path="/admin/nowa" element={<AdminLayout><ReferenceForm /></AdminLayout>} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </SiteContentProvider>
    )
}

export default App
