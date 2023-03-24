import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Billing, Dashboard, FAQs, PixelManagement, Profile, ReferralProgram } from './pages';
import { MainLayout } from './components';
import { EarnMoney, PartnerProgram, Payouts } from './pages/ReferralProgramItem';
import { Login, Register, ForgotPassword, ResetPassword } from './pages/Auth';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/admin" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/admin/billing" index element={<Billing />} />
                    <Route path="/admin/profile" index element={<Profile />} />
                    <Route path="/admin/pixel-management" index element={<PixelManagement />} />
                    <Route path="/admin/referral-program" element={<ReferralProgram />}>
                        <Route path="/admin/referral-program/1" index element={<EarnMoney />} />
                        <Route path="/admin/referral-program/2" index element={<Payouts />} />
                        <Route path="/admin/referral-program/3" index element={<PartnerProgram />} />
                    </Route>
                    <Route path="/admin/fAQs" index element={<FAQs />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
