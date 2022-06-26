<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## Laravel React Boilerplate

<p>
<a href="https://packagist.org/packages/nilanth/laravel-react-boilerplate"><img src="https://img.shields.io/packagist/v/nilanth/laravel-react-redux" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/nilanth/laravel-react-boilerplate"><img src="https://img.shields.io/packagist/l/nilanth/laravel-react-redux" alt="License"></a>
</p>

Laravel React Boilerplate helps to fasten your development, Instead of spending more time on configuring React and SPA Authentication.

### Pre-Configured with

- **Laravel 9**
- Laravel Sanctum for SPA Auth
- **React 18**
- Redux 
- React Router
- Route-Level Code-Splitting
- Axios
- [Ant Design](https://github.com/ant-design/ant-design)
- [Redux Saga](https://redux-saga.js.org/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://github.com/eslint/eslint)
- Preconfigured redux store, actions and saga.

### Pre-Configured Modules

- User Login
- User SignUp
- Auth Routes

## Quick Start

### Laravel Development Environment setup

You can choose either one for your development
1. [Laravel Homestead](https://laravel.com/docs/8.x/homestead)
2. [Laravel Sail](https://laravel.com/docs/8.x/sail)

### Required setup before clone
1. [Composer 2](https://getcomposer.org/download/). 
2. [Node](https://nodejs.org/en/) stable version.

## Usage

### Option 1

1. Install using composer

```
composer create-project nilanth/laravel-react-boilerplate
```

2. `cd laravel-react-boilerplate`
3. Run `yarn install`
4. Create a Database
5. Update the Database credential to .env file
6. Run `php artisan migrate` -> To create needed tables.
7. Run `php artisan db:seed` -> To seed some fake users.
8. Run `yarn run dev`
9. Update API HOST_URL in `resources/js/config/constant.js` file

### Option 2


1. Clone this Repo
2. `cd laravel-react-boilerplate`
3. Create a .env by copying .env.example and Update the required fields.
4. Run `composer install`
5. Run `php artisan key:gen`
6. Run `yarn install`
7. Create a Database
8. Update the Database credential to .env file
9. Run `php artisan migrate` -> To create needed tables.
10. Run `php artisan db:seed` -> To seed some fake users.
11. Run `yarn run dev`
12. Update API HOST_URL in `resources/js/config/constant.js` file

### Coming Up 

- Tests
- Custom Error response for API request
- Reset Password
- Email Verification

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

-   [Nilanth](https://github.com/nilanth)
-   [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️

If you found this boilerplate helpful, consider supporting me with a coffee.

<a href="https://www.buymeacoffee.com/nilanth" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee"  height=40 ></a>

