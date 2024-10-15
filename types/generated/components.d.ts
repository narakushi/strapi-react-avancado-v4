import type { Schema, Attribute } from '@strapi/strapi';

export interface PageTechIcons extends Schema.Component {
  collectionName: 'components_page_tech_icons';
  info: {
    displayName: 'techIcons';
    icon: 'code';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageSocialLinks extends Schema.Component {
  collectionName: 'components_page_social_links';
  info: {
    displayName: 'socialLinks';
    icon: 'oneToMany';
  };
  attributes: {
    title: Attribute.Enumeration<
      ['Github', 'Twitter', 'Dribble', 'LinkedIn', 'Facebook']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Twitter'>;
    url: Attribute.String & Attribute.Required;
  };
}

export interface PageSectionTech extends Schema.Component {
  collectionName: 'components_page_section_teches';
  info: {
    displayName: 'sectionTech';
    icon: 'cup';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    techIcons: Attribute.Component<'page.tech-icons', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 5;
          max: 10;
        },
        number
      >;
  };
}

export interface PageSectionModules extends Schema.Component {
  collectionName: 'components_page_section_modules';
  info: {
    displayName: 'sectionModules';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    modules: Attribute.Component<'page.modules', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
  };
}

export interface PageSectionConcepts extends Schema.Component {
  collectionName: 'components_page_section_concepts';
  info: {
    displayName: 'sectionConcepts';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    concepts: Attribute.Component<'page.concepts', true>;
  };
}

export interface PageSectionAgenda extends Schema.Component {
  collectionName: 'components_page_section_agenda';
  info: {
    displayName: 'sectionAgenda';
    icon: 'calendar';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface PageSectionAboutUs extends Schema.Component {
  collectionName: 'components_page_section_aboutuses';
  info: {
    displayName: 'sectionAboutUs';
    icon: 'user';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    authors: Attribute.Relation<
      'page.section-about-us',
      'oneToMany',
      'api::author.author'
    >;
  };
}

export interface PageSectionAboutProject extends Schema.Component {
  collectionName: 'components_page_section_about_projects';
  info: {
    displayName: 'sectionAboutProject';
    icon: 'information';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface PagePricingBox extends Schema.Component {
  collectionName: 'components_page_pricing_boxes';
  info: {
    displayName: 'pricingBox';
    icon: 'shoppingCart';
  };
  attributes: {
    totalPrice: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<579>;
    numberInstallments: Attribute.Integer & Attribute.Required;
    priceInstallment: Attribute.Integer & Attribute.Required;
    benefits: Attribute.Blocks & Attribute.Required;
    button: Attribute.Component<'page.button'> & Attribute.Required;
  };
}

export interface PageModules extends Schema.Component {
  collectionName: 'components_page_modules';
  info: {
    displayName: 'modules';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface PageHeader extends Schema.Component {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'header';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    button: Attribute.Component<'page.button'> & Attribute.Required;
    image: Attribute.Media<'images' | 'videos'> & Attribute.Required;
  };
}

export interface PageConcepts extends Schema.Component {
  collectionName: 'components_page_concepts';
  info: {
    displayName: 'concepts';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.tech-icons': PageTechIcons;
      'page.social-links': PageSocialLinks;
      'page.section-tech': PageSectionTech;
      'page.section-modules': PageSectionModules;
      'page.section-concepts': PageSectionConcepts;
      'page.section-agenda': PageSectionAgenda;
      'page.section-about-us': PageSectionAboutUs;
      'page.section-about-project': PageSectionAboutProject;
      'page.pricing-box': PagePricingBox;
      'page.modules': PageModules;
      'page.header': PageHeader;
      'page.concepts': PageConcepts;
      'page.button': PageButton;
    }
  }
}
