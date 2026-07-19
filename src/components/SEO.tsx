/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  schemaType?: 'Organization' | 'LocalBusiness' | 'FAQ' | 'Article' | 'Service';
  schemaData?: Record<string, any>;
}

export default function SEO({ title, description, path, schemaType, schemaData }: SEOProps) {
  useEffect(() => {
    // Set standard meta tags
    document.title = `${title} | ARIAS BUSINESS CONSULTING`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Set Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', `${title} | ARIAS BUSINESS CONSULTING`);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    // Schema Markup Insertion
    const existingSchemaScript = document.getElementById('json-ld-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    const defaultSchemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://ariasbusinessconsulting.com/#organization',
        'name': 'ARIAS BUSINESS CONSULTING, LLC',
        'url': 'https://ariasbusinessconsulting.com',
        'logo': 'https://ariasbusinessconsulting.com/logo.png',
        'image': 'https://ariasbusinessconsulting.com/cover.jpg',
        'description': 'ARIAS BUSINESS CONSULTING, LLC provides professional business strategy, operational organization, workflow documentation, and growth planning consulting services in Florida.',
        'telephone': '+1-407-801-4292',
        'email': 'info@ariasbusinessconsulting.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '2149 NW 85th Way',
          'addressLocality': 'Coral Springs',
          'addressRegion': 'FL',
          'postalCode': '33071',
          'addressCountry': 'US'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '26.2731',
          'longitude': '-80.2435'
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
          ],
          'opens': '09:00',
          'closes': '17:00'
        },
        'sameAs': []
      }
    ];

    if (schemaType && schemaData) {
      defaultSchemas.push({
        '@context': 'https://schema.org',
        '@type': schemaType,
        ...schemaData
      } as any);
    }

    const script = document.createElement('script');
    script.id = 'json-ld-schema';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(defaultSchemas);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('json-ld-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, path, schemaType, schemaData]);

  return null;
}
