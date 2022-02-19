module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b19ba30fe1104665a3bb8ea998261b33'),
  },
});
