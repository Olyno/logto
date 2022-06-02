/* eslint-disable max-lines */
const translation = {
  general: {
    placeholder: 'Placeholder',
    skip: 'Skip',
    next: 'Next',
    retry: 'Try again',
    done: 'Done',
    search: 'Search',
    save_changes: 'Save changes',
    loading: 'Loading...',
    redirecting: 'Redirecting...',
    added: 'Added',
    cancel: 'Cancel',
    confirm: 'Confirm',
    check_out: 'Check out',
    create: 'Create',
    set_up: 'Set up',
    customize: 'Customize',
  },
  main_flow: {
    input: {
      username: 'Username',
      password: 'Password',
      email: 'Email',
      phone_number: 'Phone number',
      confirm_password: 'Confirm password',
    },
    secondary: {
      sign_in_with: 'Sign in with {{methods, list(type: disjunction;)}}',
      social_bind_with:
        'Already have an account? Sign in to bind {{methods, list(type: disjunction;)}} with your social identity.',
    },
    action: {
      sign_in: 'Sign In',
      continue: 'Continue',
      create_account: 'Create Account',
      create: 'Create',
      enter_passcode: 'Enter Passcode',
      confirm: 'Confirm',
      cancel: 'Cancel',
      bind: 'Binding with {{address}}',
      back: 'Go Back',
      nav_back: 'Back',
      agree: 'Agree',
      got_it: 'Got it',
      sign_in_with: 'Sign in with {{name}}',
    },
    description: {
      email: 'email',
      phone: 'phone',
      phone_number: 'phone number',
      reminder: 'Reminder',
      not_found: '404 Not Found',
      loading: 'Loading...',
      redirecting: 'Redirecting...',
      agree_with_terms: 'I have read and agree to the ',
      agree_with_terms_modal: 'Please read the {{terms}} and then agree the box first.',
      terms_of_use: 'Terms of Use',
      create_account: 'Create Account',
      forgot_password: 'Forgot Password?',
      or: 'or',
      enter_passcode: 'The passcode has been sent to your {{address}}',
      passcode_sent: 'The passcode has been resent',
      resend_after_seconds: 'Resend after {{seconds}} seconds',
      resend_passcode: 'Resend Passcode',
      continue_with: 'Continue with',
      create_account_id_exists:
        'The account with {{type}} {{value}} already exists, would you like to sign in?',
      sign_in_id_does_not_exists:
        'The account with {{type}} {{value}} does not exist, would you like to create a new account?',
      bind_account_title: 'Binding Logto account',
      social_create_account: 'No account? You can create a new account and bind.',
      social_bind_account: 'Already have an account? Sign in to bind it with your social identity.',
      social_bind_with_existing: 'We find a related account, you can bind it directly.',
    },
    error: {
      username_password_mismatch: 'Username and password do not match.',
      username_required: 'Username is required.',
      password_required: 'Password is required.',
      username_exists: 'Username already exists.',
      username_should_not_start_with_number: 'Username should not start with a number.',
      username_valid_charset: 'Username should only contain letters, numbers, or underscore.',
      invalid_email: 'The email is invalid',
      invalid_phone: 'The phone number is invalid',
      password_min_length: 'Password requires a minimum of {{min}} characters.',
      passwords_do_not_match: 'Passwords do not match.',
      agree_terms_required: 'You must agree to the Terms of Use before continuing.',
      invalid_passcode: 'The passcode is invalid.',
      invalid_connector_auth: 'The authorization is invalid.',
      invalid_connector_request: 'The connector data is invalid.',
      request: 'Request error {{message}}',
      unknown: 'Unknown error, please try again later.',
      invalid_session: 'Session not found. Please go back and sign in again.',
    },
  },
  admin_console: {
    title: 'Admin Console',
    sign_out: 'Sign out',
    profile: 'Profile',
    copy: {
      pending: 'Copy',
      copying: 'Copying',
      copied: 'Copied',
    },
    form: {
      required: 'Required',
      add_another: '+ Add Another',
      confirm: 'Reminder',
      cancel: 'Cancel',
      delete: 'Delete',
      deletion_confirmation: 'Are you sure you want to delete this {{title}}?',
    },
    errors: {
      something_went_wrong: 'Oops! Something went wrong',
      unknown_server_error: 'Unknown server error occurred.',
      empty: 'No data',
      missing_total_number: 'Unable to find Total-Number in response headers.',
      invalid_uri_format: 'Invalid URI format',
      invalid_origin_format: 'Invalid URI origin format',
      required_field_missing: 'Please enter {{field}}',
      required_field_missing_plural: 'You have to enter at least one {{field}}',
      more_details: 'More details',
    },
    tab_sections: {
      overview: 'Overview',
      resource_management: 'Resource Management',
      user_management: 'User Management',
      help_and_support: 'Help and Support',
    },
    tabs: {
      get_started: 'Get Started',
      dashboard: 'Dashboard',
      applications: 'Applications',
      api_resources: 'API Resources',
      sign_in_experience: 'Sign-in Experience',
      connectors: 'Connectors',
      users: 'User Management',
      audit_logs: 'Audit Logs',
      documentation: 'Documentation',
      contact_us: 'Contact Us',
      settings: 'Settings',
    },
    applications: {
      title: 'Applications',
      subtitle:
        'Setup a mobile, single page or traditional application to use Logto for authentication.',
      create: 'Create Application',
      application_name: 'Application name',
      application_description: 'Application description',
      select_application_type: 'Select an application type',
      no_application_type_selected: 'You haven’t selected any application type yet.',
      application_created:
        'The application {{name}} has been successfully created! \nNow finish your application settings.',
      client_id: 'Client ID',
      type: {
        native: {
          title: 'Native App',
          subtitle: 'Mobile, desktop, CLI and smart device apps running natively.',
          description: 'E.g.: iOS, Electron, Apple TV apps',
        },
        spa: {
          title: 'Single Page App',
          subtitle: 'A JavaScript front-end app that uses an API.',
          description: 'E.g.: Angular, React, Vue',
        },
        traditional: {
          title: 'Traditional Web',
          subtitle: 'Traditional web app using redirects.',
          description: 'E.g.: Node.js, Express, ASP.NET, Java, PHP',
        },
      },
      guide: {
        get_sample_file: 'Get a sample file',
        header_description:
          'Follow a step by step guide to integrate your application or get a sample configured with your account settings',
        title: 'Congratulations! The application has been created successfully.',
        subtitle:
          'Now follow the steps below to finish your app settings. Please select the SDK type to continue.',
        description_by_sdk: 'This quickstart demonstrates how to add Logto to {{sdk}} application.',
      },
    },
    application_details: {
      back_to_applications: 'Back to Applications',
      check_help_guide: 'Check Help Guide',
      settings: 'Settings',
      advanced_settings: 'Advanced settings',
      application_name: 'Application name',
      description: 'Description',
      authorization_endpoint: 'Authorization endpoint',
      redirect_uri: 'Redirect URI',
      post_sign_out_redirect_uri: 'Post sign out redirect URI',
      cors_allowed_origins: 'CORS allowed origins',
      add_another: 'Add Another',
      id_token_expiration: 'ID token expiration',
      refresh_token_expiration: 'Refresh token expiration',
      token_endpoint: 'Token endpoint',
      user_info_endpoint: 'User info endpoint',
      save_changes: 'Save Changes',
      more_options: 'MORE OPTIONS',
      options_delete: 'Delete',
      reminder: 'Reminder',
      delete_description:
        'This action cannot be undone. It will permanently delete the application. Please enter the application name <span>{{name}}</span> to confirm.',
      enter_your_application_name: 'Enter your application name',
      cancel: 'Cancel',
      delete: 'Delete',
      application_deleted: 'Application {{name}} has been successfully deleted.',
      save_success: 'Saved!',
      redirect_uri_required: 'You must enter at least one redirect URI.',
    },
    api_resources: {
      title: 'API Resources',
      subtitle: 'Define APIs that you can consume from your authorized applications.',
      create: 'Create API Resource',
      api_name: 'API name',
      api_identifier: 'API identifier',
      api_resource_created: 'The API resource {{name}} has been successfully created!',
    },
    api_resource_details: {
      back_to_api_resources: 'Back to API resources',
      check_help_guide: 'Check Help Guide',
      more_options: 'MORE OPTIONS',
      options_delete: 'Delete',
      settings: 'Settings',
      save_changes: 'Save Changes',
      token_expiration_time_in_seconds: 'Token expiration time (in seconds)',
      reminder: 'Reminder',
      delete_description:
        'This action cannot be undone. It will permanently delete the API resource. Please enter the api resource name <span>{{name}}</span> to confirm.',
      enter_your_api_resource_name: 'Enter your API resource name',
      cancel: 'Cancel',
      delete: 'Delete',
      api_resource_deleted: 'The API Resource {{name}} has been successfully deleted.',
      save_success: 'Saved!',
    },
    connectors: {
      title: 'Connectors',
      subtitle: 'Setup connectors to enable passwordless and social sign in experience.',
      create: 'Add Social Connector',
      added: 'Added',
      set_up: 'Set Up',
      tab_email_sms: 'Email and SMS connectors',
      tab_social: 'Social connectors',
      connector_name: 'Connector name',
      connector_type: 'Type',
      connector_status: 'Sign in Experience',
      connector_status_in_use: 'In use',
      connector_status_not_in_use: 'Not in use',
      social_connector_eg: 'e.g.: Google, Facebook, Twitter',
      next: 'Next',
      type: {
        email: 'Email sender',
        sms: 'SMS sender',
        social: 'Social',
      },
      setup_title: {
        email: 'Setup Email sender',
        sms: 'Setup SMS sender',
        social: 'Add Social Connector',
      },
      guide: {
        subtitle:
          'A step by step guide to integrate your connector or get a sample configured with your account settings',
      },
      platform: {
        universal: 'Universal',
        web: 'Web',
        native: 'Native',
      },
    },
    connector_details: {
      back_to_connectors: 'Back to Connectors',
      check_readme: 'Check README',
      tab_settings: 'Settings',
      save_changes: 'Save Changes',
      save_error_empty_config: 'Please enter config.',
      save_error_json_parse_error: 'Please enter valid JSON.',
      save_success: 'Saved!',
      send: 'Send',
      send_error_invalid_format: 'Invalid input',
      test_email_sender: 'Test your email sender',
      test_sms_sender: 'Test your SMS sender',
      test_message_sent: 'Test message sent!',
      test_sender_description: 'Test sender description',
      options: 'Options',
      options_delete: 'Delete',
      options_change_email: 'Change email connector',
      options_change_sms: 'Change SMS connector',
      more_options: 'MORE OPTIONS',
      connector_deleted: 'The connector has been successfully deleted.',
      type_email: 'Email connector',
      type_sms: 'SMS connector',
      type_social: 'Social connector',
    },
    get_started: {
      progress: 'Get started guide: {{completed}}/{{total}}',
      progress_dropdown_title: 'A few things you can do...',
      title: 'How do you want to get started with Logto?',
      subtitle_part1: 'A few things you can do to quickly get value of Logto',
      subtitle_part2: 'I’m done with this set up. ',
      hide_this: 'Hide this',
      confirm: 'Reminder',
      confirm_message: 'Are you sure you want to hide this page? This action cannot be undone.',
      card1_title: 'Check out the demo',
      card1_subtitle: 'Try Logto sign in experience now to see how it works.',
      card2_title: 'Create and integrate the first application',
      card2_subtitle:
        'Setup a mobile, single page or traditional application to use Logto for authentication.',
      card3_title: 'Enable SMS sign in and Email authentication',
      card3_subtitle:
        'Try passwordless sign in and enable a secure and frictionless experience for your customer.',
      card4_title: 'Add a social connector',
      card4_subtitle:
        'Give your customers the ability to sign in to your app with the social identities in one click.',
      card5_title: 'Customize sign-in experience',
      card5_subtitle: 'Customize the sign in UI to match your brand and preview in real time.',
      card6_title: 'Further readings',
      card6_subtitle: 'Check out our step-by-step, scenario-based docs without tedious concepts.',
    },
    users: {
      title: 'User Management',
      subtitle:
        'Manage user identities including editing user profile information, viewing user logs, password resets and deleting users.',
      create: 'Add User',
      user_name: 'User',
      application_name: 'From application',
      latest_sign_in: 'Latest sign in',
      create_form_username: 'Username',
      create_form_password: 'Password',
      create_form_name: 'Full name',
      unnamed: 'Unnamed',
    },
    user_details: {
      back_to_users: 'Back to User Management',
      created_title: 'Congratulations! This user has been successfully created.',
      created_guide: 'You can send the following log in information to the user.',
      created_username: 'User username:',
      created_password: 'Initial password:',
      created_button_close: 'Close',
      created_button_copy: 'Copy',
      more_options: 'MORE OPTIONS',
      menu_delete: 'Delete',
      delete_title: 'Reminder',
      delete_description: 'This action cannot be undone. It will permanently delete the user.',
      delete_cancel: 'Cancel',
      delete_confirm: 'Delete',
      deleted: 'The user has been successfully deleted.',
      reset_password: {
        title: 'Reset password',
        label: 'New password:',
        reset_password: 'Reset password',
        reset_password_success: 'Password has been successfully reset.',
      },
      tab_settings: 'Settings',
      tab_logs: 'User logs',
      field_email: 'Primary email',
      field_phone: 'Primary phone',
      field_username: 'Username',
      field_name: 'Name',
      field_avatar: 'Avatar image URL',
      field_roles: 'Roles',
      field_custom_data: 'Custom data',
      field_connectors: 'Social connectors',
      custom_data_invalid: 'Custom data must be a valid JSON',
      save_changes: 'Save Changes',
      saved: 'Saved!',
      connectors: {
        connectors: 'Connectors',
        user_id: 'User ID',
        remove: 'Remove',
        not_connected: 'The user is not connected to any social connector.',
      },
      roles: {
        default: 'Default',
        admin: 'Admin',
      },
    },
    contact: {
      title: 'Contact Us',
      description:
        'Join in our community to provide feedback, ask for help and share your thoughts with other developers.',
      discord: {
        title: 'Discord Channel',
        description: 'Join our public channel to chat with developers.',
        button: 'Join',
      },
      github: {
        title: 'GitHub',
        description: 'Create an issue.',
        button: 'Contact',
      },
      email: {
        title: 'Send us an email',
        description: 'If you have any question.',
        button: 'Send',
      },
    },
    sign_in_exp: {
      title: 'Sign-in Experience',
      description: 'Customize the sign in UI to match your brand and preview in real time.',
      tabs: {
        experience: 'Experience',
        methods: 'Sign in methods',
        others: 'Others',
      },
      welcome: {
        title:
          'This is the first time you define sign-in experience. This guide will help you go through all necessary settings and quicly get started.',
        get_started: 'Get started',
        apply_remind:
          'Please note that sign-in experience will apply to all applications under this account.',
        got_it: 'Got it',
      },
      branding: {
        title: 'BRANDING',
        primary_color: 'Brand color',
        dark_primary_color: 'Brand color (Dark)',
        dark_mode: 'Enable dark mode',
        dark_mode_description:
          'Your app will have an auto-generated dark mode theme based on your brand color and Logto algorithm. You are free to customize.',
        ui_style: 'Branding area',
        styles: {
          logo_slogan: 'App logo with slogan',
          logo: 'App logo',
        },
        logo_image_url: 'App logo image URL',
        dark_logo_image_url: 'App logo image URL (Dark)',
        slogan: 'Slogan',
        slogan_placeholder: 'Unleash your creativity',
      },
      terms_of_use: {
        title: 'TERMS OF USE',
        enable: 'Enable terms of use',
        description:
          'Add the legal agreements for the use of your product. They serve as a contract between the product and user. ',
        terms_of_use: 'Terms of use',
        terms_of_use_placeholder: 'Terms of use url',
        terms_of_use_tip: 'Terms of use url',
      },
      sign_in_methods: {
        title: 'SIGN IN METHODS',
        primary: 'Primary sign in method',
        enable_secondary: 'Enable secondary sign in',
        enable_secondary_description:
          "Once it's turned on, you app will support more sign in method(s) besides the primary one. ",
        methods: 'Sign in method',
        methods_sms: 'Phone number sign in',
        methods_email: 'Email sign in',
        methods_social: 'Social sign in',
        methods_username: 'Username-with-password sign in',
        methods_primary_tag: '(Primary)',
        define_social_methods: 'Define social sign in methods',
        transfer: {
          title: 'Social connectors',
          footer: {
            not_in_list: 'Not in the list?',
            set_up_more: 'Set up more',
            go_to: 'social connectors or go to “Connectors” section.',
          },
        },
      },
      others: {
        languages: {
          title: 'LANGUAGES',
          mode: 'Language mode',
          auto: 'Auto',
          fixed: 'Fixed',
          fallback_language: 'Fallback language',
          fixed_language: 'Fixed language',
          languages: {
            english: 'English',
            chinese: 'Chinese',
          },
        },
      },
      setup_warning: {
        setup: 'Set up',
        no_connector: '',
        no_connector_sms:
          'You haven’t set up a SMS connector yet. Your sign in experience won’t go live until you finish the settings first. ',
        no_connector_email:
          'You haven’t set up an Email connector yet. Your sign in experience won’t go live until you finish the settings first. ',
        no_connector_social:
          'You haven’t set up any social connectors yet. Your sign in experience won’t go live until you finish the settings first. ',
        no_added_social_connector:
          'You’ve set up a few social connectors now. Make sure to add some to your sign in experience. Drag and drop to change the order.',
      },
      save_alert: {
        title: 'Reminder',
        description:
          'You are changing sign in methods. This will impact some of your users. Are you sure you want to do that?',
        before: 'Before',
        after: 'After',
      },
      preview: {
        title: 'Sign in preview',
        languages: {
          english: 'English',
          chinese: 'Chinese',
        },
        dark: 'Dark',
        light: 'Light',
        mobile: 'Mobile',
        web: 'Web',
      },
    },
    settings: {
      title: 'Settings',
      description: 'Manage the global settings',
      tabs: {
        general: 'General',
      },
      custom_domain: 'Custom domain',
      language: 'Language',
      language_english: 'English',
      language_chinese: 'Chinese',
      appearance: 'Appearance',
      appearance_system: 'Sync with system',
      appearance_light: 'Light mode',
      appearance_dark: 'Dark mode',
      saved: 'Saved!',
    },
    dashboard: {
      title: 'Dashboard',
      description: 'Get an overview about your app performace',
      total_users: 'Total users',
      new_users_today: 'New users today',
      new_users_7_days: 'New users past 7 days',
      daily_active_users: 'Daily active users',
      weekly_active_users: 'Weeky active users',
      monthly_active_users: 'Monthly active users',
    },
    logs: {
      title: 'Audit Logs',
      subtitle: 'View log data of authentication events made by your admin and users.',
      event: 'Event',
      user: 'User',
      application: 'Application',
      time: 'Time',
      filter_by: 'Filter by',
    },
    session_expired: {
      title: 'Session Expired',
      subtitle:
        'Your session might have expired and you have been disconnected. Click the button below to sign in to admin console again.',
      button: 'Sign in again',
    },
  },
};

const errors = {
  auth: {
    authorization_header_missing: 'Authorization header is missing.',
    authorization_token_type_not_supported: 'Authorization type is not supported.',
    unauthorized: 'Unauthorized. Please check credentials and its scope.',
    jwt_sub_missing: 'Missing `sub` in JWT.',
  },
  guard: {
    invalid_input: 'The request input is invalid.',
    invalid_pagination: 'The request pagination value is invalid.',
  },
  oidc: {
    aborted: 'The end-user aborted interaction.',
    invalid_scope: 'Scope {{scope}} is not supported.',
    invalid_scope_plural: 'Scope {{scopes}} are not supported.',
    invalid_token: 'Invalid token provided.',
    invalid_client_metadata: 'Invalid client metadata provided.',
    insufficient_scope: 'Access token missing requested scope {{scopes}}.',
    invalid_request: 'Request is invalid.',
    invalid_grant: 'Grant request is invalid.',
    invalid_redirect_uri:
      "`redirect_uri` did not match any of the client's registered `redirect_uris`.",
    access_denied: 'Access denied.',
    invalid_target: 'Invalid resource indicator.',
    unsupported_grant_type: 'Unsupported `grant_type` requested.',
    unsupported_response_mode: 'Unsupported `response_mode` requested.',
    unsupported_response_type: 'Unsupported `response_type` requested.',
    provider_error: 'OIDC Internal Error: {{message}}.',
  },
  user: {
    username_exists_register: 'The username has been registered.',
    email_exists_register: 'The email address has been registered.',
    phone_exists_register: 'The phone number has been registered.',
    invalid_email: 'Invalid email address.',
    invalid_phone: 'Invalid phone number.',
    email_not_exists: 'The email address has not been registered yet.',
    phone_not_exists: 'The phone number has not been registered yet.',
    identity_not_exists: 'The social account has not been registered yet.',
    identity_exists: 'The social account has been registered.',
  },
  password: {
    unsupported_encryption_method: 'The encryption method {{name}} is not supported.',
    pepper_not_found: 'Password pepper not found. Please check your core envs.',
  },
  session: {
    not_found: 'Session not found. Please go back and sign in again.',
    invalid_credentials: 'Invalid credentials. Please check your input.',
    invalid_sign_in_method: 'Current sign-in method is not available.',
    invalid_connector_id: 'Unable to find available connector with id {{connectorId}}.',
    insufficient_info: 'Insufficient sign-in info.',
    connector_id_mismatch: 'The connectorId is mismatched with session record.',
    connector_session_not_found: 'Connector session not found. Please go back and sign in again.',
    unauthorized: 'Please sign in first.',
    unsupported_prompt_name: 'Unsupported prompt name',
  },
  connector: {
    general: 'An unexpected error occurred in connector.',
    not_found: 'Cannot find any available connector for type: {{type}}.',
    not_enabled: 'The connector is not enabled.',
    invalid_config: "The connector's config is invalid.",
    template_not_found: 'Unable to find correct template in connector config.',
    access_token_invalid: "Connector's access token is invalid.",
    oauth_code_invalid: 'Unable to get access token, please check authorization code.',
    more_than_one_sms: 'The number of SMS connectors is larger then 1.',
    more_than_one_email: 'The number of Email connectors is larger then 1.',
    db_connector_type_mismatch: 'There is a connector in the DB that does not match the type.',
  },
  passcode: {
    phone_email_empty: 'Both phone and email are empty.',
    not_found: 'Passcode not found. Please send passcode first.',
    phone_mismatch: 'Phone mismatch. Please request a new passcode.',
    email_mismatch: 'Email mismatch. Please request a new passcode.',
    code_mismatch: 'Invalid passcode.',
    expired: 'Passcode has expired. Please request a new passcode.',
    exceed_max_try: 'Passcode verification limitation exceeded. Please request a new passcode.',
  },
  sign_in_experiences: {
    empty_content_url_of_terms_of_use:
      'Empty "Terms of use" content URL. Please add the content URL if "Terms of use" is enabled.',
    empty_slogan:
      'Empty branding slogan. Please add a branding slogan if a UI style containing the slogan is selected.',
    empty_social_connectors:
      'Empty social connectors. Please add enabled social connectors when the social sign-in method is enabled.',
    enabled_connector_not_found: 'Enabled {{type}} connector not found.',
    invalid_social_connectors:
      'Invalid social connectors, Please confirm all your selected social connectors are enabled.',
    not_one_and_only_one_primary_sign_in_method:
      'There must be one and only one primary sign-in method. Please check your input.',
  },
  swagger: {
    invalid_zod_type: 'Invalid Zod type, please check route guard config.',
  },
  entity: {
    create_failed: 'Failed to create {{name}}.',
    not_exists: 'The {{name}} does not exist.',
    not_exists_with_id: 'The {{name}} with ID `{{id}}` does not exist.',
    not_found: 'The resource does not exist',
  },
};

const en = Object.freeze({
  translation,
  errors,
});

export default en;
/* eslint-enable max-lines */
