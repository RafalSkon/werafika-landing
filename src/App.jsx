import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WinWin } from './components/WinWin'
import { ComparisonTable } from './components/ComparisonTable'
import { Partners } from './components/Partners'
import { AboutUs } from './components/AboutUs'
import { LeadMagnetForm } from './components/LeadMagnetForm'
import { Footer } from './components/Footer'

function App() {
    return (
        <div className="min-h-screen font-sans selection:bg-brand-turquoise selection:text-brand-navy">
            <Navbar />
            <main>
                <div id="hero">
                    <Hero />
                </div>
                <WinWin />
                <ComparisonTable />
                <Partners />
                <AboutUs />
                <LeadMagnetForm />
            </main>
            <Footer />
        </div>
    )
}

export default App
