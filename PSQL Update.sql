DELETE FROM saas_us_pricing;
DELETE FROM saas_uk_pricing;
DELETE FROM saas_eur_pricing;
DELETE FROM saas_aus_pricing;
DELETE FROM saas_zar_pricing;
DELETE FROM saas_sgd_pricing;
DELETE FROM saas_nzd_pricing;
DELETE FROM saas_inr_pricing;
DELETE FROM saas_brl_pricing;

\copy saas_us_pricing from 'C:\Users\IBM_ADMIN\Documents\Work\SSP Mobile App\DLScript\Unzipped\AMERICASUnitedstatesUSAnew.csv' DELIMITERS ',' CSV;
\copy saas_uk_pricing from 'C:\Users\IBM_ADMIN\Documents\Work\SSP Mobile App\DLScript\Unzipped\EMEAUnitedkingdomGBRnew.csv' DELIMITERS ',' CSV;
\copy saas_eur_pricing from 'C:\Users\IBM_ADMIN\Documents\Work\SSP Mobile App\DLScript\Unzipped\EMEAEurcountriesEUROnew.csv' DELIMITERS ',' CSV;
\copy saas_aus_pricing from 'C:\Users\IBM_ADMIN\Documents\Work\SSP Mobile App\DLScript\Unzipped\APACAustraliaAUSnew.csv' DELIMITERS ',' CSV;
\copy saas_zar_pricing from 'C:\Users\IBM_ADMIN\Documents\Work\SSP Mobile App\DLScript\Unzipped\EMEASouthafricaZAFnew.csv' DELIMITERS ',' CSV;
\copy saas_sgd_pricing from 'C:\Users\IBM_ADMIN\Documents\Work\SSP Mobile App\DLScript\Unzipped\APACSingaporeSGPnew.csv' DELIMITERS ',' CSV;
\copy saas_nzd_pricing from 'C:\Users\IBM_ADMIN\Documents\Work\SSP Mobile App\DLScript\Unzipped\APACNewZealandNZLnew.csv' DELIMITERS ',' CSV;
\copy saas_inr_pricing from 'C:\Users\IBM_ADMIN\Documents\Work\SSP Mobile App\DLScript\Unzipped\APACIndiaINDnew.csv' DELIMITERS ',' CSV;
\copy saas_brl_pricing from 'C:\Users\IBM_ADMIN\Documents\Work\SSP Mobile App\DLScript\Unzipped\AMERICASBrazilBRAnew.csv' DELIMITERS ',' CSV;