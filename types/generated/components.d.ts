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

export interface PageSectionReviews extends Schema.Component {
  collectionName: 'components_page_section_reviews';
  info: {
    displayName: 'sectionReviews';
    icon: 'star';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    reviews: Attribute.Component<'page.reviews', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
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

export interface PageSectionFaq extends Schema.Component {
  collectionName: 'components_page_section_faqs';
  info: {
    displayName: 'sectionFaq';
    icon: 'question';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    questions: Attribute.Component<'page.questions', true> &
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

export interface PageReviews extends Schema.Component {
  collectionName: 'components_page_reviews';
  info: {
    displayName: 'reviews';
    icon: 'discuss';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    photo: Attribute.Media<'images'>;
  };
}

export interface PageQuestions extends Schema.Component {
  collectionName: 'components_page_questions';
  info: {
    displayName: 'questions';
    icon: 'question';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Blocks & Attribute.Required;
  };
}

export interface PagePricingBox extends Schema.Component {
  collectionName: 'components_page_pricing_boxes';
  info: {
    displayName: 'pricingBox';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    totalPrice: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<579>;
    newPrice: Attribute.Decimal & Attribute.Required;
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
      'page.section-reviews': PageSectionReviews;
      'page.section-modules': PageSectionModules;
      'page.section-faq': PageSectionFaq;
      'page.section-concepts': PageSectionConcepts;
      'page.section-agenda': PageSectionAgenda;
      'page.section-about-us': PageSectionAboutUs;
      'page.section-about-project': PageSectionAboutProject;
      'page.reviews': PageReviews;
      'page.questions': PageQuestions;
      'page.pricing-box': PagePricingBox;
      'page.modules': PageModules;
      'page.header': PageHeader;
      'page.concepts': PageConcepts;
      'page.button': PageButton;
    }
  }
}
